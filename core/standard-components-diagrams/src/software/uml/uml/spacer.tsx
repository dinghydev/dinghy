import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SPACER = {
  _style: {
    entity:
      'text;strokeColor=none;fillColor=none;align=left;verticalAlign=middle;spacingTop=-1;spacingLeft=4;spacingRight=4;rotatable=0;labelPosition=right;points=[];portConstraint=eastwest;',
  },
  _original_width: 0,
  _original_height: 14,
}

export function Spacer(props: DiagramNodeProps) {
  return <Shape {...SPACER} {...props} _style={extendStyle(SPACER, props)} />
}
