import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SERVERLESS_SEARCH = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/ai_machine_learning/Serverless_Search.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
