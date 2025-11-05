import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VNF_M = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.vnf_m;',
  },
  _original_width: 50,
  _original_height: 43.5,
}

export function VnfM(props: NodeProps) {
  return <Shape {...VNF_M} {...props} _style={extendStyle(VNF_M, props)} />
}
