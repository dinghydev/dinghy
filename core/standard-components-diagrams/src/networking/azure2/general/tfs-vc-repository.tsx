import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TFS_VC_REPOSITORY = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/TFS_VC_Repository.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function TfsVcRepository(props: DiagramNodeProps) {
  return <Shape {...TFS_VC_REPOSITORY} {...props} />
}
