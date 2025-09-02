import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTUNE_APP_PROTECTION = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Intune_App_Protection.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function IntuneAppProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_APP_PROTECTION}
      {...props}
      _style={extendStyle(INTUNE_APP_PROTECTION, props)}
    />
  )
}
