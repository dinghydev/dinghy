import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ASM_SERVICE_MESH = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.asm_service_mesh;',
  _width: 43.199999999999996,
  _height: 50.099999999999994,
}

export function AsmServiceMesh(props: DiagramNodeProps) {
  return <Shape {...ASM_SERVICE_MESH} {...props} />
}
