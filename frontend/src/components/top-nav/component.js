import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { Flex } from '#widgets';

import styles from './style';

const TopNav = () => {
  const classes = styles();
  const Links = ['todo', 'doing', 'done'];
  const [active, setActive] = useState();

  return (
    <Flex
      className={classes.container}
    >
      {
        Links.map((link) => (
          <Link
            className={
              clsx(classes.link,
                active === link && classes.active)
            }
            activeClass={classes.active}
            to={link}
            spy
            smooth
            hashSpy
            offset={-250}
            duration={500}
            delay={0}
            isDynamic
            onSetActive={setActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            {link}
          </Link>

        ))
      }

    </Flex>
  );
};

TopNav.propTypes = {
};

TopNav.defaultProps = {
};

export default TopNav;
