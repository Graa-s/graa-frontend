import type { Theme, ImmutableTheme } from 'types/themes';

const transition: Theme['transition'] = function(
  this: ImmutableTheme,
  properties,
  duration = this.transitionDuration,
  timingFn = 'ease-in-out',
) {
  const composeTransitionProperty = (property: typeof properties) => {
    return `${property} ${duration}ms ${timingFn}`;
  };

  if (Array.isArray(properties)) {
    return properties.map(composeTransitionProperty).join(', ');
  } else {
    return composeTransitionProperty(properties);
  }
};

export default transition;
