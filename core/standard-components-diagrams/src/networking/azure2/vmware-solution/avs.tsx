import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AVS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_vmware_solution/AVS.svg;strokeColor=none;',
  _width: 70,
  _height: 56.00000000000001,
}

export function Avs(props: DiagramNodeProps) {
  return <Shape {...AVS} {...props} _style={extendStyle(AVS, props)} />
}
