import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHANGE_SET = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.change_set;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ChangeSet(props: NodeProps) {
  return (
    <Shape {...CHANGE_SET} {...props} _style={extendStyle(CHANGE_SET, props)} />
  )
}
