import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEFENDER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Azure_Defender.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function Defender(props: DiagramNodeProps) {
  return (
    <Shape {...DEFENDER} {...props} _style={extendStyle(DEFENDER, props)} />
  )
}
