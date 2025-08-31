import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESH_APPLICATIONS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Mesh_Applications.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function MeshApplications(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESH_APPLICATIONS}
      {...props}
      _style={extendStyle(MESH_APPLICATIONS, props)}
    />
  )
}
