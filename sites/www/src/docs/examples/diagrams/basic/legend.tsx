import { Shape } from '@dinghy/base-components'
import { Rectangle } from '@dinghy/diagrams/entitiesGeneral'

export default function Stack() {
  return (
    <Shape _title='Legend Example'>
      <Shape _title='Container'>
        <Shape>Entity</Shape>
      </Shape>
      <Legend>
        <LegendElement Component={Rectangle} _title='Container' />
        <LegendElement Component={Shape} _title='Entity' />
      </Legend>
    </Shape>
  )
}

const LegendElement = ({ Component, ...props }: any) => (
  <Component _width={80} _height={20} _margin={{ bottom: 0 }} {...props} />
)

const Legend = (props: any) => (
  <Shape
    _x={200}
    _y={200}
    _style={{ opacity: 0 }}
    _direction='vertical'
    {...props}
  />
)
