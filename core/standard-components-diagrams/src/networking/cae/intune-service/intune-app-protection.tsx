import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTUNE_APP_PROTECTION = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Intune_App_Protection.svg;strokeColor=none;',
  _width: 50,
  _height: 40,
}

export function IntuneAppProtection(props: DiagramNodeProps) {
  return <Shape {...INTUNE_APP_PROTECTION} {...props} />
}
