import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GREENGRASS_COMPONENT_MACHINE_LEARNING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_greengrass_component_machine_learning;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function GreengrassComponentMachineLearning(props: NodeProps) {
  return (
    <Shape
      {...GREENGRASS_COMPONENT_MACHINE_LEARNING}
      {...props}
      _style={extendStyle(GREENGRASS_COMPONENT_MACHINE_LEARNING, props)}
    />
  )
}
