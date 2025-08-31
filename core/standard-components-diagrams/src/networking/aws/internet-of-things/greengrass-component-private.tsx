import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GREENGRASS_COMPONENT_PRIVATE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_greengrass_component_private;',
  _width: 60,
  _height: 60,
}

export function GreengrassComponentPrivate(props: DiagramNodeProps) {
  return (
    <Shape
      {...GREENGRASS_COMPONENT_PRIVATE}
      {...props}
      _style={extendStyle(GREENGRASS_COMPONENT_PRIVATE, props)}
    />
  )
}
