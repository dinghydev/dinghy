import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SERVERLESS_SEARCH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Serverless_Search.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ServerlessSearch(props: DiagramNodeProps) {
  return (
    <Shape
      {...SERVERLESS_SEARCH}
      {...props}
      _style={extendStyle(SERVERLESS_SEARCH, props)}
    />
  )
}
