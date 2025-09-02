import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MANAGED_IDENTITIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Identities.svg;strokeColor=none;',
  },
  _original_width: 38,
  _original_height: 50,
}

export function ManagedIdentities(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_IDENTITIES}
      {...props}
      _style={extendStyle(MANAGED_IDENTITIES, props)}
    />
  )
}
