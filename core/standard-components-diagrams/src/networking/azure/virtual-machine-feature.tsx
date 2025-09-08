import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIRTUAL_MACHINE_FEATURE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.virtual_machine_feature;pointerEvents=1;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function VirtualMachineFeature(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_MACHINE_FEATURE}
      {...props}
      _style={extendStyle(VIRTUAL_MACHINE_FEATURE, props)}
    />
  )
}
