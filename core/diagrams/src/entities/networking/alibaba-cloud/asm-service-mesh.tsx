import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASM_SERVICE_MESH = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.asm_service_mesh;',
  },
  _original_width: 43.199999999999996,
  _original_height: 50.099999999999994,
}

export function AsmServiceMesh(props: NodeProps) {
  return (
    <Shape
      {...ASM_SERVICE_MESH}
      {...props}
      _style={extendStyle(ASM_SERVICE_MESH, props)}
    />
  )
}
