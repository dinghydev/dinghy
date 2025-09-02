import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LIGHTSAIL = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.lightsail;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 82.5,
}

export function Lightsail(props: DiagramNodeProps) {
  return (
    <Shape {...LIGHTSAIL} {...props} _style={extendStyle(LIGHTSAIL, props)} />
  )
}
