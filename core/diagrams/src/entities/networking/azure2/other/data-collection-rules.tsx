import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_COLLECTION_RULES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Data_Collection_Rules.svg;strokeColor=none;',
  },
  _original_width: 66.60000000000001,
  _original_height: 68,
}

export function DataCollectionRules(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_COLLECTION_RULES}
      {...props}
      _style={extendStyle(DATA_COLLECTION_RULES, props)}
    />
  )
}
