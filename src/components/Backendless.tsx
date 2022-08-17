
    import * as React from 'react';

    export type BackendlessProps = React.ComponentPropsWithoutRef<'svg'> & {
      /**
       * Hex color or color name
       */
      title?: string;
      /**
       * The size of the Icon.
       */
      color?: string;
      /**
       * The title provides an accessible short text description to the SVG
       */
      size?: string | number;
    };

    const Backendless = React.forwardRef<SVGSVGElement, BackendlessProps>(function Backendless({color = 'currentColor', size = 24, title = "backendless", ...others}, ref) {

      return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={color} viewBox="0 0 24 24" ref={ref} {...others}>
          <title>{title}</title>
          <path d="M4.215 6.16C2.354 6.147.584 6.953 0 8.19c3.68-.998 5.747-.332 8.244 2.638.99 1.184 1.895 2.45 2.992 3.51 1.098 1.08 2.303 2.161 3.637 2.826 2.97 1.475 6.802.415 8.05-1.994-.387.145-.752.27-1.118.416-1.693 1.181-3.92 1.204-5.748-.375-1.873-1.62-3.487-3.532-5.166-5.36C9.276 8.107 7.555 6.55 5.016 6.217a6.243 6.243 0 0 0-.801-.057Zm15.639 1.719c-.957-.013-2 .301-3.043.976-1.034.686-1.96 1.538-2.971 2.348-.603-.395-1.204-.81-1.807-1.205-.043.062-.11.145-.152.207.15.187.324.354.474.54.861.956 1.743 1.931 2.69 2.866.947-.852 1.723-1.598 2.562-2.305 2.411-2.035 4.628-1.725 6.393 1.038-.355-2.828-2.042-4.437-4.146-4.465ZM4.393 12.615c1.291 5.422 4.733 4.902 7.08 3.738.624.291 1.528.603 2.109.873.043-.062.107-.125.15-.187-1.033-.665-1.978-1.538-2.84-2.37-.215-.207-.41-.415-.603-.622-3.336 2.866-5.896-1.432-5.896-1.432z" />
        </svg>
      );
    });

    export default Backendless
  