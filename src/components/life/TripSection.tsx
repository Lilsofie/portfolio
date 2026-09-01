import type { TravelEntry } from "../../content";
import ContactSheet from "./ContactSheet";

export default function TripSection({ trip }: { trip: TravelEntry }) {
  return (
    <article className="trip" aria-labelledby={`trip-${trip.id}`}>
      <header className="trip__head">
        <h2 id={`trip-${trip.id}`} className="serif trip__place">
          {trip.place}
          {trip.country && (
            <span className="trip__country">, {trip.country}</span>
          )}
        </h2>
        <p className="museum-label trip__date">{trip.date}</p>
      </header>

      <p className="trip__caption">{trip.caption}</p>
      {trip.reflection && <p className="trip__reflection">{trip.reflection}</p>}

      <ContactSheet trip={trip} />
    </article>
  );
}
