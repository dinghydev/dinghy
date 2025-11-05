import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DIVIDER = {
  _style: {
    entity:
      'line;strokeWidth=1;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=3;spacingRight=3;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;strokeColor=inherit;',
  },
  _width: 0,
  _height: 8,
}

export function Divider(props: NodeProps) {
  return <Shape {...DIVIDER} {...props} _style={extendStyle(DIVIDER, props)} />
}
