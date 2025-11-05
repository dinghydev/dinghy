import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MESH_APPLICATIONS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Mesh_Applications.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MeshApplications(props: NodeProps) {
  return (
    <Shape
      {...MESH_APPLICATIONS}
      {...props}
      _style={extendStyle(MESH_APPLICATIONS, props)}
    />
  )
}
