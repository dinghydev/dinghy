import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GREENGRASS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.greengrass;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 76.5,
  _original_height: 93,
}

export function Greengrass(props: DiagramNodeProps) {
  return (
    <Shape {...GREENGRASS} {...props} _style={extendStyle(GREENGRASS, props)} />
  )
}
