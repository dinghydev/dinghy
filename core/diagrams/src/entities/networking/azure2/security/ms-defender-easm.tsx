import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MS_DEFENDER_EASM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/MS_Defender_EASM.svg;strokeColor=none;',
  },
  _original_width: 55.44,
  _original_height: 68,
}

export function MsDefenderEasm(props: DiagramNodeProps) {
  return (
    <Shape
      {...MS_DEFENDER_EASM}
      {...props}
      _style={extendStyle(MS_DEFENDER_EASM, props)}
    />
  )
}
