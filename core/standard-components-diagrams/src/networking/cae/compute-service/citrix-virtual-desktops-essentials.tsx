import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CITRIX_VIRTUAL_DESKTOPS_ESSENTIALS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Citrix_Virtual_Desktops_Essentials.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function CitrixVirtualDesktopsEssentials(props: DiagramNodeProps) {
  return (
    <Shape
      {...CITRIX_VIRTUAL_DESKTOPS_ESSENTIALS}
      {...props}
      _style={extendStyle(CITRIX_VIRTUAL_DESKTOPS_ESSENTIALS, props)}
    />
  )
}
