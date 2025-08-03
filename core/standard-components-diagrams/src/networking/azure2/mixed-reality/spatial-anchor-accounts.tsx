import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SPATIAL_ANCHOR_ACCOUNTS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/mixed_reality/Spatial_Anchor_Accounts.svg;strokeColor=none;',
  _width: 66.8,
  _height: 68,
}

export function SpatialAnchorAccounts(props: DiagramNodeProps) {
  return <Shape {...SPATIAL_ANCHOR_ACCOUNTS} {...props} />
}
