import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVS_VM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AVS_VM.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62.8,
}

export function AvsVm(props: DiagramNodeProps) {
  return <Shape {...AVS_VM} {...props} _style={extendStyle(AVS_VM, props)} />
}
