import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MS_DEFENDER_EASM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/MS_Defender_EASM.svg;strokeColor=none;',
  },
  _original_width: 55.44,
  _original_height: 68,
}

export function MsDefenderEasm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MS_DEFENDER_EASM)} />
}
