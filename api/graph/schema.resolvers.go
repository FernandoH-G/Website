package graph

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.

import (
	"context"
	"fmt"

	"github.com/FernandoH-G/Project-Site/graph/generated"
	"github.com/FernandoH-G/Project-Site/graph/model"
)

func (r *queryResolver) FetchRepo(ctx context.Context) ([]*model.Repo, error) {
	panic(fmt.Errorf("not implemented"))
}

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type queryResolver struct{ *Resolver }
