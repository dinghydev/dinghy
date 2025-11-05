import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BYCICLE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.bycicle;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Bycicle(props: NodeProps) {
  return <Shape {...BYCICLE} {...props} _style={extendStyle(BYCICLE, props)} />
}
