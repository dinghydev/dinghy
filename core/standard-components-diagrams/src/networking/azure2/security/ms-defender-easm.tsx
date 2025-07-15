import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MS_DEFENDER_EASM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/MS_Defender_EASM.svg;',
  _width: 55.44,
  _height: 68,
}

export function MsDefenderEasm(props: DiagramNodeProps) {
  return <Shape {...MS_DEFENDER_EASM} {...props} />
}
