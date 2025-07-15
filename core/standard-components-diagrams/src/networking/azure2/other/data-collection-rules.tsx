import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATA_COLLECTION_RULES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Data_Collection_Rules.svg;',
  _width: 66.60000000000001,
  _height: 68,
}

export function DataCollectionRules(props: DiagramNodeProps) {
  return <Shape {...DATA_COLLECTION_RULES} {...props} />
}
