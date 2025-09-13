import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOSCALE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.autoscale;',
  },
  _width: 50,
  _height: 30,
}

export function Autoscale(props: DiagramNodeProps) {
  return (
    <Shape {...AUTOSCALE} {...props} _style={extendStyle(AUTOSCALE, props)} />
  )
}
