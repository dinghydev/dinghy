import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_SHARES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/storage/Data_Shares.svg;',
  _width: 64,
  _height: 55.00000000000001,
}

export function DataShares(props: DiagramNodeProps) {
  return <Shape {...DATA_SHARES} {...props} />
}
