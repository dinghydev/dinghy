import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AVS_VM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AVS_VM.svg;',
  _width: 68,
  _height: 62.8,
}

export function AvsVm(props: DiagramNodeProps) {
  return <Shape {...AVS_VM} {...props} />
}
