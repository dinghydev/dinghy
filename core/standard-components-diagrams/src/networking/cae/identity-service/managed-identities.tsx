import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANAGED_IDENTITIES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Identities.svg;strokeColor=none;',
  _width: 38,
  _height: 50,
}

export function ManagedIdentities(props: DiagramNodeProps) {
  return <Shape {...MANAGED_IDENTITIES} {...props} />
}
