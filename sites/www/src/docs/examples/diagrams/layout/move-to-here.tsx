import { MoveToHere, Shape } from '@dinghy/base-components'

export default function Stack() {
  return (
    <Shape _title='Move To Here Example' _direction='vertical'>
      <Shape _title='Sources'>
        <Source1 _title='Source 1' _consolidatedId='source1'>
          <Shape>Source 1 first child</Shape>
        </Source1>
        <Source1
          _title='Source 1 again and only child kept'
          _consolidatedId='source1'
        >
          <Shape>Source 1 second child</Shape>
        </Source1>
        <Source1>Source 1 excluded</Source1>
        <Shape>Source2 included</Shape>
        <Shape>Source2 excluded</Shape>
        <Shape>Source 3 by function</Shape>
        <Shape>None matched</Shape>
      </Shape>
      <Shape _title='Moved To Here From Sources'>
        <MoveToHere includes='Source1' excludes='excluded'>
          Two sources moved to here
        </MoveToHere>
        <MoveToHere includes='source2' excludes='excluded'>
          Source 2 match by id
        </MoveToHere>
        <Shape>Regular shape</Shape>
        <MoveToHere
          includes={(node: any) => node._props._title.includes('function')}
        >
          Source 3 match by Function
        </MoveToHere>
      </Shape>
    </Shape>
  )
}

const Source1 = (props: any) => <Shape {...props} />
