import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIRTUAL_MACHINE_FEATURE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.virtual_machine_feature;pointerEvents=1;',
  _width: 50,
  _height: 45,
}

export function VirtualMachineFeature(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL_MACHINE_FEATURE} {...props} />
}
