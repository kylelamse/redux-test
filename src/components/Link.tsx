import * as React from 'react';
import PropTypes from 'prop-types';

interface Props {
    active?: boolean;
    children?: React.ReactChildren;
    onClick?: () => any;
}

const Link: React.SFC<Props> = (props: Props) => {
    const {children, active, onClick} = props;
    if (active) {
        return <span>{children}</span>;
    }

    return (
    <a
      href="#"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
          e.preventDefault();
          onClick();
      }}
    >
      {children}
    </a>
    );
};

export default Link;
