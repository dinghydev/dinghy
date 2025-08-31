import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_DESKTOP = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Desktop.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 36,
}

export function ManagedDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DESKTOP}
      {...props}
      _style={extendStyle(MANAGED_DESKTOP, props)}
    />
  )
}
