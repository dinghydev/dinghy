import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TFS_VC_REPOSITORY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/general/TFS_VC_Repository.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function TfsVcRepository(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TFS_VC_REPOSITORY)} />
}
