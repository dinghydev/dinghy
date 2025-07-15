import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CITRIX_VIRTUAL_DESKTOPS_ESSENTIALS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Citrix_Virtual_Desktops_Essentials.svg;',
  _width: 50,
  _height: 50,
}

export function CitrixVirtualDesktopsEssentials(props: DiagramNodeProps) {
  return <Shape {...CITRIX_VIRTUAL_DESKTOPS_ESSENTIALS} {...props} />
}
