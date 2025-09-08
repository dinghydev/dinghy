import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GENOMICS_ACCOUNTS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Genomics_Accounts.svg;strokeColor=none;',
  },
  _original_width: 26,
  _original_height: 50,
}

export function GenomicsAccounts(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENOMICS_ACCOUNTS}
      {...props}
      _style={extendStyle(GENOMICS_ACCOUNTS, props)}
    />
  )
}
