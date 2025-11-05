import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPACER = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=4;spacingRight=4;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;',
  },
  _width: 0,
  _height: 14,
}

export function Spacer(props: NodeProps) {
  return <Shape {...SPACER} {...props} _style={extendStyle(SPACER, props)} />
}
