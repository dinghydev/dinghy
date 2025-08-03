import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MESH_APPLICATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Mesh_Applications.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function MeshApplications(props: DiagramNodeProps) {
  return <Shape {...MESH_APPLICATIONS} {...props} />
}
