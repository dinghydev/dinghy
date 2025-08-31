import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TFS_VC_REPOSITORY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/TFS_VC_Repository.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TfsVcRepository(props: DiagramNodeProps) {
  return (
    <Shape
      {...TFS_VC_REPOSITORY}
      {...props}
      _style={extendStyle(TFS_VC_REPOSITORY, props)}
    />
  )
}
