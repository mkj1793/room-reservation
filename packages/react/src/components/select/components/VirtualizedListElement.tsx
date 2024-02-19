import React, { PropsWithChildren, forwardRef, ForwardedRef, MutableRefObject } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

import { UlElementProps } from '../types';

type Props = PropsWithChildren<UlElementProps>;

export const VirtualizedListElement = forwardRef<HTMLUListElement, Props>(
  (props: Props, ref: ForwardedRef<HTMLUListElement>) => {
    const { children, ...attr } = props;
    const childElements = children as React.ReactNode[];
    const rowVirtualizer = useVirtualizer({
      count: childElements.length || 0,
      getScrollElement: () => (ref ? (ref as MutableRefObject<Element>).current : null),
      estimateSize: () => 40,
    });

    /*
      Without the empty div, the virtualized render only 7/1000+ items.
    */
    return (
      <div>
        <ul
          {...attr}
          ref={ref}
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: `${virtualItem.size}px`,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {childElements[virtualItem.index]}
            </div>
          ))}
        </ul>
      </div>
    );
  },
);
