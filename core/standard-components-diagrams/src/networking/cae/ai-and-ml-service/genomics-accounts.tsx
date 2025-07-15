import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GENOMICS_ACCOUNTS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Genomics_Accounts.svg;',
  _width: 26,
  _height: 50,
}

export function GenomicsAccounts(props: DiagramNodeProps) {
  return <Shape {...GENOMICS_ACCOUNTS} {...props} />
}
