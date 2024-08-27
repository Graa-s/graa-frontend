import { Children } from 'react';
import { ListItem, ListItemInner, StyledList } from './List.styled';
import type { ReactElement } from 'react';

export type Props = {
  items?: string[];
  children?: ReactElement<typeof ListItemInner> | ReactElement<typeof ListItemInner>[];
};

function List({ children, items, ...restProps }: Props) {
  const childrenArray = Children.toArray(children);

  return (
    <StyledList {...restProps}>
      {childrenArray.map((child, index) => (
        <ListItem key={index}>{child}</ListItem>
      ))}

      {!children && items?.map(item => (
        <ListItem key={item}>
          <ListItemInner>{item}</ListItemInner>
        </ListItem>
      ))}
    </StyledList>
  );
}

List.ItemInner = ListItemInner;

export default List;
