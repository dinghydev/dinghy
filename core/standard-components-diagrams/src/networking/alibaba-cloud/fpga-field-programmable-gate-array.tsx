import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FPGA_FIELD_PROGRAMMABLE_GATE_ARRAY = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.fpga_field_programmable_gate_array;',
  },
  _original_width: 45.6,
  _original_height: 45.3,
}

export function FpgaFieldProgrammableGateArray(props: DiagramNodeProps) {
  return (
    <Shape
      {...FPGA_FIELD_PROGRAMMABLE_GATE_ARRAY}
      {...props}
      _style={extendStyle(FPGA_FIELD_PROGRAMMABLE_GATE_ARRAY, props)}
    />
  )
}
